import { GetAllFaq } from '@/actions/faq/getallFaq';
import { QuestionTabs } from '@/components/faq/Tabs';
import AddFaq from '@/components/faq/AddFaq';
import { getTranslations } from 'next-intl/server';
    import { auth, currentUser } from '@clerk/nextjs/server'

export default async function FAQ() {

    const {answeredQuestions, pendingQuestions} = await GetAllFaq();
    const t = await getTranslations();
const user = await currentUser()
const userData = {
    imageUrl: user?.imageUrl,
    firstName: user?.firstName,
    email: user?.emailAddresses[0]?.emailAddress
}
    
 
    
    return (
        <div className="p-4">
            <div className="flex flex-row justify-between items-center mb-4">
<h1 className="text-2xl font-bold font-cairo ">{t("Faq.pagetitle")}</h1>
            <AddFaq user={userData} />
            </div>
            <h3 className="text-sm text-muted-foreground   font-cairo mb-4">{t("Faq.notPerfect")}</h3>
            
            <QuestionTabs answeredQuestions={answeredQuestions} pendingQuestions={pendingQuestions}/>

            
        </div>
    );
};

