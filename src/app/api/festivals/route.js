import { NextResponse } from 'next/server';

export async function GET(request) {
  const url = new URL('https://apis.sanatanjyoti.com/api/getFestivalsOnCategory');
  const category = request.nextUrl.searchParams.get('category');
  const year = request.nextUrl.searchParams.get('year');

  if (category && year) {
    url.searchParams.set('category', category);
    url.searchParams.set('year', year);
  }

  try {
    const res = await fetch(url.toString());
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return NextResponse.error();
  }
}
