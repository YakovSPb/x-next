class PagesConfig {
    HOME = '/'
    EXPLORE = '/explore'
    PROFILE_FAKE = '/profile-fake'
    PROFILE(username: string) {
        return `/u/${username}`
    }
}

export const PAGES = new PagesConfig()