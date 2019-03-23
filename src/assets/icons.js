import React from 'react'

export const TrashIcon = ({ className = undefined }) => (
    <svg className={className} viewBox="0 0 32 32"><path d="M8.319 8l1.475 18.169A1.83 1.83 0 0 0 11.625 28h8.813a1.83 1.83 0 0 0 1.831-1.831L23.725 8H8.319zm3.85 16.563L11.75 10h1.156l.431 14.563h-1.169zm4.394 0h-1.125V10h1.125v14.563zm3.268 0h-1.163L19.093 10h1.156l-.419 14.563zM22.75 5.75H20.5l-1.644-1.438a1.267 1.267 0 0 0-.825-.313h-4.05c-.306 0-.606.112-.838.313L11.499 5.75h-2.25c-1.1 0-1.875.525-1.875 1.625h17.25c0-1.1-.775-1.625-1.875-1.625z" /></svg>
)

export const EditIcon = ({ className = undefined }) => (
    <svg className={className} viewBox="0 0 32 32"><path d="M4 23v5h5l14.733-14.733-5-5L4 23zM27.6 9.4a1.29 1.29 0 0 0 0-1.867L24.467 4.4a1.29 1.29 0 0 0-1.867 0l-2.467 2.467 5 5L27.6 9.4z"/></svg>
)

export const CancelIcon = ({ className = undefined }) => (
    <svg className={className} viewBox="0 0 32 32"><path d="M20.706 19.294L17.412 16l3.294-3.294c.387-.387.387-1.025 0-1.412s-1.025-.387-1.413 0l-3.294 3.294-3.294-3.294c-.387-.387-.975-.444-1.412 0-.444.444-.375 1.037 0 1.412L14.587 16l-3.294 3.294c-.419.419-.4 1.019 0 1.413.4.4 1.025.387 1.412 0l3.294-3.294 3.294 3.294a1.005 1.005 0 0 0 1.413 0 .992.992 0 0 0 0-1.413z"/><path d="M16 4.75c3.006 0 5.831 1.169 7.956 3.294S27.25 12.994 27.25 16s-1.169 5.831-3.294 7.956S19.006 27.25 16 27.25c-3.006 0-5.831-1.169-7.956-3.294S4.75 19.006 4.75 16s1.169-5.831 3.294-7.956S12.994 4.75 16 4.75zM16 3C8.819 3 3 8.819 3 16s5.819 13 13 13 13-5.819 13-13S23.181 3 16 3z"/></svg>
)