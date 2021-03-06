export const OPEN_PUBLISHER_MODAL = 'OPEN_PUBLISHER_MODAL'
export const openPublisherModal = () => ({
  type: OPEN_PUBLISHER_MODAL
})

export const CLOSE_PUBLISHER_MODAL = 'CLOSE_PUBLISHER_MODAL'
export const closePublisherModal = () => ({
  type: CLOSE_PUBLISHER_MODAL
})

export const PUBLISH_RECORD = 'PUBLISH_RECORD'
export const publishRecord = () => ({
  type: PUBLISH_RECORD
})

export const PUBLISH_TEMPLATE = 'PUBLISH_TEMPLATE'
export const publishTemplate = () => ({
  type: PUBLISH_TEMPLATE
})

export const FORK_TEMPLATE = 'FORK_TEMPLATE'
export const forkTemplate = forkedTemplate => ({
  type: FORK_TEMPLATE,
  forkedTemplates: [forkedTemplate]
})

export const PUBLISH_SUCCESS = 'PUBLISH_SUCCESS'
export const publishSuccess = () => ({
  type: PUBLISH_SUCCESS
})

export const PUBLISH_PENDING = 'PUBLISH_PENDING'
export const publishPending = () => ({
  type: PUBLISH_PENDING
})

export const PUBLISH_ERROR = 'PUBLISH_ERROR'
export const publishError = (error) => ({
  type: PUBLISH_ERROR,
  error
})
