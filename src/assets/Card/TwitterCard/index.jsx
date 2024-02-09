import {useState} from 'react'
import './Card.css'
function TwitterCard({userName ='unknow', name}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const aUserName = `@${userName}`
    const text = isFollowing?'Siguiendo':'Seguir'
    const buttonClassName = isFollowing?'tw-followCard-button is-following': 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt="El avatar de Luher" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infouserName'>{aUserName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

export {TwitterCard}