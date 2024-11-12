import { getTranslations } from 'next-intl/server'

export default async function NotFound() {
  // const t = await getTranslations('NotFound')
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Not Found</h1>
    </div>
  )
}