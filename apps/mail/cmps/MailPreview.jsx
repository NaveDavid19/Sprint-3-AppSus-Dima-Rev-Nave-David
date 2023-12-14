import { mailService, loggedinUser } from "../services/mail.service.js";
const { Link } = ReactRouterDOM

export function MailPreview({ mail, onUpdateMail, onRemoveMail }) {
    const readClassName = mail.isRead ? "" : "unread";
    const displayedUserName = (mail.from === loggedinUser.email) ? mail.to : mail.from.userName;

    function handleReadMail(mail, isRead) {
        const readMail = {
            ...mail,
            isRead: isRead
        }
        mailService.save(readMail).then(onUpdateMail)
    }
    function handleStarMail(mail, isStar) {
        const readMail = {
            ...mail,
            isStar: isStar
        }
        mailService.save(readMail).then(onUpdateMail)
    }
    function handleRemoveMail(mailToRemove) {
        mailService.remove(mailToRemove.id).then(() => onRemoveMail(mailToRemove))
    }

    return (
        <li className="mail">
            <input className="star" checked={mail.isStar} type="checkbox" onChange={() => handleStarMail(mail, !mail.isStar)} />
            <Link onClick={() => handleReadMail(mail, true)} to={`/mail/${mail.id}`}>
                <p className={readClassName}>{displayedUserName}</p>
            </Link>
            <Link onClick={() => handleReadMail(mail, true)} to={`/mail/${mail.id}`}>
                <article className="mail-text">
                    <p className={readClassName}>{mail.subject} - </p>
                    <p>{mail.body}</p>
                </article>
            </Link>
            <div >
                {/* <p>{setDate(mail.sentAt)}</p> */}
                <p>{mail.sentAt}</p>
                <section className="mail-btn">
                    <button className="delete" title="Delete" onClick={() => handleRemoveMail(mail)}><i className="fa-solid fa-trash"></i></button>
                    <input checked={mail.isRead} type="checkbox" onChange={() => handleReadMail(mail, !mail.isRead)} />
                </section>
            </div>
        </li>
    );
}



