module.exports = async function reviews(req, res) {
  const { GBP_LOCATION, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env;
  if (!/^accounts\/\d+\/locations\/\d+$/.test(GBP_LOCATION || '') ||
      !GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) {
    return res.status(503).json({ unavailable: true });
  }
  try {
    const token = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      body: new URLSearchParams({ client_id: GOOGLE_CLIENT_ID, client_secret: GOOGLE_CLIENT_SECRET,
        refresh_token: GOOGLE_REFRESH_TOKEN, grant_type: 'refresh_token' }),
      signal: AbortSignal.timeout(5000)
    });
    if (!token.ok) throw Error('Authorization failed');
    const { access_token } = await token.json();
    const response = await fetch('https://mybusiness.googleapis.com/v4/' + GBP_LOCATION + '/reviews?pageSize=50&orderBy=updateTime%20desc', {
      headers: { Authorization: 'Bearer ' + access_token }, signal: AbortSignal.timeout(5000)
    });
    if (!response.ok) throw Error('Reviews unavailable');
    const { reviews = [] } = await response.json();
    const stars = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'];
    res.setHeader('Cache-Control', 'public, s-maxage=900');
    return res.json(reviews.slice(0, 8).map(r => ({
      author: r.reviewer?.displayName || 'Anonyme', rating: stars.indexOf(r.starRating) + 1,
      text: r.comment || '', date: r.updateTime
    })));
  } catch {
    return res.status(503).json({ unavailable: true });
  }
};
