const emit = (text, isError = false, fetchError = false) =>
  window.dispatchEvent(new CustomEvent('toast', { detail: { text, isError, fetchError } }))

export const toast = {
  success: text => emit(text),
  error: text => emit(text, true),
  networkError: text => emit(text, true, true),
}