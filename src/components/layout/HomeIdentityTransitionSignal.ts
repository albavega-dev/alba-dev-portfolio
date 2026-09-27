let pendingHomeIdentityTransition = false

export function armHomeIdentityTransition() {
  pendingHomeIdentityTransition = true
}

export function isHomeIdentityTransitionPending() {
  return pendingHomeIdentityTransition
}

export function consumeHomeIdentityTransition() {
  pendingHomeIdentityTransition = false
}
