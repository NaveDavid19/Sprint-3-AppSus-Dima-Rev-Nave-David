import { MailPreview } from "./MailPreview.jsx";


export function MailList({ mails, selectedTab, onUpdateMail, onRemoveMail }) {

    return (
        <section>
            {mails.map(mail => (
                <MailPreview key={mail.id} {... { mail, selectedTab, onUpdateMail, onRemoveMail }} />
            ))}
        </section>
    );
}

