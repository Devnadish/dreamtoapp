
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Check } from "lucide-react"
import { getTranslations } from "next-intl/server";

export async function QuestionTabs({answeredQuestions, pendingQuestions}: {answeredQuestions: any[], pendingQuestions: any[]}) {
  const t = await getTranslations();
  return (
    <Tabs defaultValue="answered" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="answered" className="font-cairo text-sm">{t("Faq.answered")}</TabsTrigger>
        <TabsTrigger value="pending" className="font-cairo text-sm">{t("Faq.pending")}</TabsTrigger>
        <TabsTrigger value="reported" className="font-cairo text-sm">{t("Faq.rejected")}</TabsTrigger>
      </TabsList>
        <AnsweredQuestions answeredQuestions={answeredQuestions}/>
        <PendingQuestions pendingQuestions={pendingQuestions}/>
        <RejectedQuestions  />

      
      <TabsContent value="reported"></TabsContent>
    </Tabs>
  )
}

const RejectedQuestions = ( ) => <TabsContent value="reported">
        {/* {rejectedQuestions.map((item) => (
            <div key={item.id} className="mb-4 border p-4 rounded-lg shadow-md">
                <h1 className="text-xl font-bold">{item.question}</h1>
            </div>
        ))} */}
      </TabsContent>

const PendingQuestions = ({pendingQuestions}: {pendingQuestions: any[]}) => <TabsContent value="pending">
        {pendingQuestions.map((item) => (
            <div key={item.id} className="mb-4 border p-4 rounded-lg shadow-md">
                <h1 className="text-lg  font-cairo">{item.question}</h1>
            </div>
        ))}
      </TabsContent>
const AnsweredQuestions = ({answeredQuestions}: {answeredQuestions: any[]}) => <TabsContent value="answered">
        {answeredQuestions.map((item) => (
            <div key={item.id} className="mb-4 border p-4 rounded-lg shadow-md">
                <h1 className="text-xl font-bold">{item.question}</h1>
                <div className="mt-2 space-y-2">
                    {item.answers.map((answer: any, index: number) => (
                        <div key={index} className="text-gray-700 flex items-start w-full flex-row justify-between  ">
                            <Check className="text-green-500" />
                            <p className="text-sm border-b border-gray-200 "> {answer.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        ))}
      </TabsContent>

