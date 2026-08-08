'use client'

export default function ShareButton() {
  const handleShare = async () => {
    const shareData = {
      title: 'Sky-Vue Skateland',
      text: 'Check out Sky-Vue Skateland in Rocky Mount, NC!',
      url: 'https://sky-vue-skateland.vercel.app',
    }

    if (navigator.share) {
      await navigator.share(shareData)
    } else {
      await navigator.clipboard.writeText(shareData.url)
      alert('Sky-Vue link copied!')
    }
  }

  return (
    <button
      onClick={handleShare}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
    >
      Share Sky-Vue
    </button>
  )
} 
