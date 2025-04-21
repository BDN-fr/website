'use client'

import './socials.css'

const socials = [
    {'name':'Github', 'link':'https://github.com/BDN-fr', 'icon':'github.svg', 'note':'I make open source repo sometimes, and after a week or two I abandon them and never touch them again'},
    {'name':'Discord', 'link':'https://discord.com/users/704593833421438996', 'icon':'discord.svg', 'note':'If discord\'s user shitty feature bug, my username is "bdn_fr"'},
    {'name':'Steam', 'link':'https://steamcommunity.com/id/BDN_fr', 'icon':'steam.svg'},
    {'name':'Instagram', 'link':'https://www.instagram.com/bdn_fr', 'icon':'instagram.svg', 'note':'I\'m quite inactive'},
    {'name':'Youtube', 'link':'https://youtube.com/@modo_discord', 'icon':'youtube.svg', 'note':'I shitpost sometimes'},
    {'name':'Twitch', 'link':'https://twitch.tv/bdn_fr', 'icon':'twitch.svg', 'note':'I don\'t stream'},
    {'name':'Matrix', 'link':'https://matrix.to/#/@bdn_fr:private.coffee', 'icon':'matrix.svg', 'note':'I\'m realy inactive for now'},
    {'name':'Minecraft', 'link':'https://namemc.com/profile/d2c51d90-b318-4e4d-a8ad-36decb707bbb', 'icon':'minecraft.svg', 'note':'This is not a social network at all x)'},
    {'name':'Star Citizen', 'link':'https://robertsspaceindustries.com/en/citizens/BDN_fr', 'icon':'star-citizen.svg', 'note':'This is not a social network neither and I player rarely, but I spent too much money on it... 💀'}
]

function Social({name, link, icon, note}) {
    return(
        <div
        className="bordered zoom-on-hover social"
        onClick={() => window.open(link)}
        >
            <h3>{name}</h3>
            <img src={'/icons/'+icon} alt={name} className="icon"></img>
            {note && <p>{note}</p>}
        </div>
    )
}

export function Socials() {
    return (
        <>
        <p>
            The more I add, the weirder they are
        </p>
        <div className="fully-centered" style={{alignItems:'stretch'}}>
            {
                socials.map(e =>
                    <Social
                    key = {e.name}
                    name = {e.name}
                    link = {e.link}
                    icon = {e.icon}
                    note = {e.note}
                    />
                )
            }
        </div>
        </>
    )
}