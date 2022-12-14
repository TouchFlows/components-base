/**
 * Read Messages from IDB
 * @param key Takes the form of type.topics
 * @returns
 */
export async function getIDBKey(key: string) {
	return await loadFromIndexedDB(key)
		.then(function (reponse) {
			return reponse
		})
		.catch(function (error) {
			console.debug(error.message)
			return { data: [] }
		})
}

/**
 * Manage reading from the IDB
 * @param id Key to retrieve
 * @returns
 */
function loadFromIndexedDB(id: string) {
	return new Promise(function (resolve, reject) {
		var dbRequest = indexedDB.open('keyval-store')

		dbRequest.onerror = function () {
			reject(Error('IDB Connection error'))
		}

		dbRequest.onupgradeneeded = function (event: any) {
			// Objectstore does not exist. Nothing to load
			event.target.transaction.abort()
			reject(Error('IDB Not found'))
		}

		dbRequest.onsuccess = function (event: any) {
			var database = event.target.result
			var transaction = database.transaction('keyval')
			var objectStore = transaction.objectStore('keyval')
			var objectRequest = objectStore.get(id)

			objectRequest.onerror = function () {
				reject(Error(`${id} no IDB data`))
			}

			objectRequest.onsuccess = function () {
				if (objectRequest.result) resolve(objectRequest.result)
				else reject(Error(`${id} not in IDB`))
			}
		}
	})
}
