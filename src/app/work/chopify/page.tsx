import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CaseStudy } from '@/components/ui/CaseStudy'
import { getProject } from '@/lib/projects'

const project = getProject('chopify')

export const metadata: Metadata = {
  title: 'Chopify',
  description:
    'A local-first content-engineering pipeline that automates the journey from raw video to publish-ready clips — ingest via yt-dlp, transcribe with Faster-Whisper word-level timestamps, discover highlights through an eight-criteria heuristic engine, and render multi-aspect output with face-aware reframing, karaoke captions and loudness normalisation. Built with Python, FFmpeg, Faster-Whisper, OpenCV, yt-dlp and YuNet.',
}

export default function Page() {
  if (!project) notFound()

  return (
    <CaseStudy project={project}>
      <p>
        Chopify automates the journey from raw video to publish-ready clips. It ingests
        sources via yt-dlp, transcribes with Faster-Whisper to produce word-level
        timestamps, then passes the transcript through an eight-criteria heuristic engine
        that ranks candidate highlights by hook, insight, emotion, energy and narrative arc.
      </p>
      <p>
        The pipeline is built in Python. FFmpeg handles cutting, re-encoding and audio
        processing including loudness normalisation to &minus;14 LUFS. OpenCV and YuNet
        provide face-aware reframing for vertical output. The browser-based Studio
        manages the project queue, presents editable clip selections alongside the
        transcript, and supports multiple caption styles with SRT export. Output
        renders at 16:9, 9:16 or 1:1.
      </p>
      <p>
        Chopify builds on an existing open-source project by Mehbul Islam (MIT licensed).
        My work adds selection strategies, a live processing engine, Kick/Twitch
        adapters and multilingual workflow support — including a Swahili captioning
        example.
      </p>
    </CaseStudy>
  )
}