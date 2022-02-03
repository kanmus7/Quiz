/* Global */
const API = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'

/* GET */
const getQuizzes = async (setQuizzes) => {
    try {
        let response = await fetch(API)
        response = await response.json()
        setQuizzes(response.results)
    } catch (error) {
        setQuizzes([])
    }
}

export { getQuizzes }