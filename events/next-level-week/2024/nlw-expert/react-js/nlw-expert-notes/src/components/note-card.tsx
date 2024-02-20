import * as Dialog from '@radix-ui/react-dialog'
// * pega todas as exportações que o react-dialog faz e coloca dentro de um objeto Dialog
// com isso, quando escreve Dialog. aparece os elementos.

import { formatDistanceToNow } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { X } from 'lucide-react'

interface NoteCardProps { 
    note: {
        date: Date
        content: string
    }
}

export function NoteCard({ note }: NoteCardProps) {
    return (
        <Dialog.Root>
            {/* Dialog.Trigger abre o modal */}
            <Dialog.Trigger className="rounded-md text-left flex-col bg-slate-800 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
                <span className="text-sm font-medium text-slate-300">
                    {formatDistanceToNow(note.date, { locale: enGB, addSuffix: true })}
                </span>
                <p className="text-sm leading-6 text-slate-400">
                    {note.content}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
            </Dialog.Trigger>

            {/* Conteúdo da modal | Portal passa o conteúdo para fora da aplicação | Overlay é para dar o efeito de que está em cima da aplicação toda */}
            <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed bg-black/50" />
                <Dialog.Content className="fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-slate-700 md:rounded-md flex flex-col outline-none">
                    <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
                        <X className="size-5"/>
                    </Dialog.Close>
                    
                    <div className="flex flex-1 flex-col gap-3 p-5">
                        <span className="text-sm font-medium text-slate-300">
                        {formatDistanceToNow(note.date, { locale: enGB, addSuffix: true })}
                        </span>

                        <p className="text-sm leading-6 text-slate-400">
                            {note.content}
                        </p>
                    </div>

                    <button 
                        type="button"
                        className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium group"
                    >
                        Do you want to <span className="text-red-400 group-hover:underline">delete this note</span>?
                    </button>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}