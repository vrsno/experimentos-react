export function TwitterFollowCard({ username, name, isFollowing }) {
    const imageSrc = `https://unavatar.io/${username}`;


    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-header-avatar"
                    src={imageSrc}
                    alt="avatar"
                />
                <div className="tw-followCard-info">
                    <p>{name}</p>
                    <span>@{username}</span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-button">
                    {isFollowing ? 'Dejar de seguir' : 'Seguir'}
                </button>
            </aside>
        </article>
    );
}
