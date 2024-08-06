

// import axios from 'axios';

// export async function getZodiacData(sign, language) {
//     try {
//         const response = await axios.post(`https://apis.sanatanjyoti.com/api/sun_sign_prediction/daily/${sign}/${language}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching zodiac data:', error);
//         throw new Error('Failed to fetch zodiac data');
//     }
// }


import axios from 'axios';

export async function GET(request) {
    const url = new URL(request.url);
    const sign = url.searchParams.get('sign');
    const language = url.searchParams.get('language');
    
    try {
        const response = await axios.post(`https://apis.sanatanjyoti.com/api/sun_sign_prediction/daily/${sign}/${language}`);
        return new Response(JSON.stringify(response.data), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching zodiac data:', error);
        return new Response('Failed to fetch zodiac data', { status: 500 });
    }
}