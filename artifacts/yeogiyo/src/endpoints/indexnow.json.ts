export const GET = () => {
  return new Response(
    JSON.stringify({
      message: 'To enable IndexNow, get an API key from Bing Webmaster Tools and configure it in your environment variables.',
      bing_endpoint: 'https://www.bing.com/indexnow',
      supported_engines: ['Bing', 'Yandex', 'Naver', 'Seznam.cz']
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

export const POST = async () => {
  const apiKey = process.env.INDEXNOW_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error: 'IndexNow key not configured. Set INDEXNOW_KEY in environment variables.'
      }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  const host = '여기여.site';
  const key = apiKey;

  try {
    const response = await fetch('https://www.bing.com/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host,
        key,
        keyLocation: `https://${host}/${key}.txt`,
        urlList: [
          'https://여기여.site/',
          'https://여기여.site/cheonan/',
          'https://여기여.site/sokcho/',
          'https://여기여.site/siheung/',
          'https://여기여.site/muan/',
          'https://여기여.site/taean/',
          'https://여기여.site/yanggu/',
          'https://여기여.site/geochang/',
          'https://여기여.site/cheorwon/',
          'https://여기여.site/dangjin/',
          'https://여기여.site/yeoju/',
          'https://여기여.site/gwangyang/',
          'https://여기여.site/yeongju/',
          'https://여기여.site/jeongeup/',
          'https://여기여.site/yangju/',
          'https://여기여.site/osan/',
          'https://여기여.site/haman/',
          'https://여기여.site/goheung/',
          'https://여기여.site/gumi/',
        ],
      }),
    });

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: true, message: 'IndexNow submission successful' }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: false, status: response.status }),
      {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};