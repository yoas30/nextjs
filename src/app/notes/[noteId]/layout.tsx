'use client'

function getRandomItem (arr:string[]){
  return arr[Math.random() * arr.length]
}

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const item = getRandomItem(["","ikan"])
    if (item === ""){
        throw new Error ('Item is empty')
    }  

    return (
      <>
          <div>layout note</div>
          {children}
      </>
    )
  }