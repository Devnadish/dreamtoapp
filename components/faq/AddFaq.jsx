"use client"

import { useState, useCallback, memo } from "react"
import { Plus } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { Textarea } from "../ui/textarea"
import { submitFaq } from "@/actions/faq/submitFaq"
import { useToast } from "@/hooks/use-toast"

// Separate the form into its own component for better re-render control
const FaqForm = memo(({ onSubmit, onClose }) => {
  const [question, setQuestion] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!question.trim()) {
      toast({
        title: "Error",
        description: "Question is required",
      })
      return
    }

    const result = await submitFaq(question)
    
    if (result.error) {
      toast({
        title: "Error",
        description: "Question already exists",
      })
    } else {
      toast({
        title: "Success",
        description: "Question added successfully. Will respond soon.",
      })
      setQuestion("")
      onClose()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Textarea 
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="min-h-[100px]"
      />
      <Button 
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white"
      >
        Save
      </Button>
    </form>
  )
})

FaqForm.displayName = "FaqForm"

// Main component
const AddFaq = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = useCallback(() => setIsOpen(true), [])
  const handleClose = useCallback(() => setIsOpen(false), [])

  return (
    <div>
      <Button 
        onClick={handleOpen}
        className="bg-green-500 hover:bg-green-600 text-white"
      >
        <Plus className="  h-4 w-4" />
        
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Question</DialogTitle>
          </DialogHeader>
          {isOpen && <FaqForm onClose={handleClose} />}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default memo(AddFaq)
