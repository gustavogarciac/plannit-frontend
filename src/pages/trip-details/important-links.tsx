import { Link2, Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '../../components/button'
import { api } from '../../libs/axios'

export function ImportantLinks() {
  const navigate = useNavigate()
  const { tripId } = useParams<{ tripId: string }>()

  if (!tripId) {
    navigate('/')
  }

  const [links, setLinks] = useState<Link[]>([])

  useEffect(() => {
    async function fetchImportantLinks() {
      const response = await api.get<{ links: Link[] }>(
        `/trips/${tripId}/links`,
      )

      setLinks(response.data.links)
    }

    fetchImportantLinks()
  }, [tripId])

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Important links</h2>

      <div className="space-y-5">
        {links.length > 0 ? (
          <>
            {links.map((link) => (
              <div
                className="flex items-center justify-between gap-4"
                key={link.id}
              >
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    {link.title}
                  </span>
                  <a
                    href={link.url}
                    target="_blank"
                    className="block truncate text-xs font-medium text-zinc-400 transition-colors duration-75 ease-linear hover:text-zinc-200"
                    rel="noreferrer"
                  >
                    {link.url}
                  </a>
                </div>
                <Link2 className="size-5 shrink-0 text-zinc-400" />
              </div>
            ))}
          </>
        ) : (
          <span className="text-sm text-zinc-400">There are no links yet.</span>
        )}
      </div>

      <Button variant="secondary" size="full">
        New link
        <Plus className="size-5" />
      </Button>
    </div>
  )
}
