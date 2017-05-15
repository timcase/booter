import deepcopy from 'deepcopy'

/**
 * Middleware that prevents state from being mutated anywhere in the app.
 */
export default function deepCopy(store) {
  return next => action => {
    deepCopyStoreState(store)
    try {
      return next(action)
    }
    finally {
      deepCopyStoreState(store)
    }
  }
}

function deepCopyStoreState(store) {
  let state = store.getState()
  if (isCopyable(state)) {
    console.log('made it here');
    state = deepcopy(state)
  }
}

function isCopyable(value) {
  return value !== null && typeof value === 'object'
}
