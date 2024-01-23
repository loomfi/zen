export async function GET({ request }) {
    if (process.env.default_theme == undefined || process.env.default_theme == 'NaN') {
        console.warn("Using 'dark' theme, please contact the panel administrator for if they want to set a default theme for all users.")
        return new Response('/addons/themes/dark')
    }
    return new Response(`/addons/themes/${process.env.default_theme}`)
}