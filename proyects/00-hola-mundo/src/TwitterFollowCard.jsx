import { useState } from "react";

export function TwitterFollowCard({ children ,username = "desconocido", name, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }

    const imageSrc = `https://unavatar.io/${username}`;
    // const addAt = (username) => `@${username}`;
    // boton cam,biar de estado
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-header-avatar"
                    src={imageSrc}
                    alt="avatar"
                />
                <div className="tw-followCard-info">
                    <p>{children || name}</p>
                    <span>@{username}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}
