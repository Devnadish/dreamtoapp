import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Check, User } from "lucide-react"
import { getTranslations } from "next-intl/server";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getTimeElapsed } from "@/lib/nadish";
export async function QuestionTabs({answeredQuestions, pendingQuestions}: {answeredQuestions: any[], pendingQuestions: any[]}) {
  const t = await getTranslations();
 
  
  return (
    <Tabs defaultValue="answered" className="w-full">
      <TabsList className="grid w-full grid-cols-3 gap-2">
        <TabsTrigger value="answered" className="relative font-cairo text-sm"><p className="text-sm">
            <span className="absolute -top-3 left-0 bg-green-500 text-white px-2 rounded-full text-xs">{answeredQuestions.length}</span>
            {t("Faq.answered")}
            </p></TabsTrigger>
          <TabsTrigger value="pending" className="relative font-cairo text-sm"><p className="text-sm">
            <span className="absolute -top-3 left-0 bg-yellow-500 text-white px-2 rounded-full text-xs">{pendingQuestions.length}</span>
            {t("Faq.pending")}
            </p></TabsTrigger>
        <TabsTrigger value="reported" className="relative font-cairo text-sm"><p className="text-sm">
            <span className="absolute -top-3 left-0 bg-red-500 text-white px-2 rounded-full text-xs">{0}</span>
            {t("Faq.rejected")}
            </p></TabsTrigger>
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
                <Qinfo userName={item.userName} userEmail={item.userEmail} userImage={item.userImage} 
              createdAt={getTimeElapsed(item.createdAt)} />
                <h1 className="text-lg  font-cairo">{item.question}</h1>
            </div>
        ))}
      </TabsContent>
const AnsweredQuestions = ({answeredQuestions}: {answeredQuestions: any[]}) => <TabsContent value="answered">
        {answeredQuestions.map((item) => (
            <div key={item.id} className="mb-4 border p-4 rounded-lg shadow-md">
              <Qinfo userName={item.userName} userEmail={item.userEmail} userImage={item.userImage} 
              createdAt={getTimeElapsed(item.createdAt)} />
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


const Qinfo =({userName,  userImage,createdAt}: {userName: string, userEmail: string, userImage: string | undefined,createdAt: string})=>{
  return <div className="flex items-center">
    <Avatar>
       
        <AvatarImage src={userImage} className="w-8 h-8" />
        <AvatarFallback className="w-8 h-8">
          <p className="text-gray-500">{userName ? userName.charAt(0).toUpperCase() : "A"}</p>
        </AvatarFallback> 
    </Avatar>
    <div className="flex flex-row gap-2 items-center text-xs text-muted-foreground w-full justify-between font-light">
      <p>{userName || "Anonymous"} </p>
      <p>{createdAt || "Unknown"} </p>
    </div>
  </div>
}

