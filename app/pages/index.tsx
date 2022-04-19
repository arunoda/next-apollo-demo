import { UserCard } from '@/components/UserCard'

export default function HomePage({ initialData }) {
  return (
    <div>
      {
        initialData.forEach(post => (
          <>
            <UserCard initialData={initialData} />
          </>
        ))
      }
    </div>
  )
}
export async function getStaticProps(ctx) {
  
}
