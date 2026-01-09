import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
  title?: string
}

const VideoModal = ({ isOpen, onClose, videoId, title = "Video" }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-0">
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
        </VisuallyHidden>
        <div className="relative w-full pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default VideoModal
