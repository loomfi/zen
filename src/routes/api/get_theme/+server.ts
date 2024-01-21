import { json } from '@sveltejs/kit';
import fs from 'fs'
import * as x from 'dotenv';

x.config()
export async function GET({ request }) {
  const d = process.env.THEME_DIR_NAME
  if (d == 'NaN' || d == undefined) {
    fs.writeFileSync('.env', '');
    fs.appendFileSync('.env', 'THEME_DIR_NAME="dark"\n');
    return new Response('dark');
  } else {
    return new Response(String(d));
  }
}