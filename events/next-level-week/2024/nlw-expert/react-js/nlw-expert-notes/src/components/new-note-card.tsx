import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useState, ChangeEvent, FormEvent } from 'react'
import { toast } from 'sonner'

interface NewNoteCardProps {
    onNoteCreated: (content: string) => void
}

export function NewNoteCard({ onNoteCreated }: NewNoteCardProps) {
    const [shouldShowOnBoarding, setShouldShowOnBoarding] = useState(true)
    const [content, setContent] = useState('')
    
    function handleStartEditor() {
        setShouldShowOnBoarding(false)
    }


    function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value) // Sempre que o usuário digitar algo, o conteúdo será atualizado para o que foi digitado

        if (event.target.value === '') {
            setShouldShowOnBoarding(true)
        }
    }

    function handleSaveNote(event: FormEvent) {
        event.preventDefault()

        onNoteCreated(content)

        toast.success('Note created successfully')
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger className="rounded-md flex flex-col bg-slate-700 text-left p-5 gap-3 outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
                <span className="text-sm font-medium text-slate-200">
                    Adicionar nota
                </span>

                <p className="text-sm leading-6 text-slate-400">
                    Grave uma nota em áudio que será convertida para texto automaticamente.
                </p>
            </Dialog.Trigger>

            {/* Conteúdo da modal | Portal passa o conteúdo para fora da aplicação | Overlay é para dar o efeito de que está em cima da aplicação toda */}
            <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed bg-black/50" />
                <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none">
                    <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
                        <X className="size-5"/>
                    </Dialog.Close>

                    <form onSubmit={handleSaveNote} className="flex-1 flex flex-col">
                        <div className="flex flex-1 flex-col gap-3 p-5">
                            <span className="text-sm font-medium text-slate-300">
                                Add note
                            </span>

                            {shouldShowOnBoarding ? (
                                <p className="text-sm leading-6 text-slate-400">
                                    Start by <button className="font-medium text-lime-400 hover:underline">recording an audio note</button> or, if you prefer, <button onClick={handleStartEditor} className="font-medium text-lime-400 hover:underline">use only text</button>.
                                </p>
                            ) : (
                                <textarea 
                                    autoFocus 
                                    className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                                    onChange={handleContentChanged}
                                />
                            )}
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
                        >
                            Create note
                        </button>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}