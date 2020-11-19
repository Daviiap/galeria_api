/**
 * Retorna uma resposta 200 (OK).
 *
 * @param {Object} res Objeto de resposta do servidor
 * @param {Object} content Conteúdo da resposta
 */
function ok(res, content = {}) {
  res.status(200)
  res.json(content)
}

/**
 * Retorna uma resposta 400 (BAD REQUEST).
 *
 * @param {Object} res Objeto de resposta do servidor
 * @param {String} error Mensagem de erro
 */
function badRequest(res, error) {
  res.status(400)
  res.json({ error })
}

/**
 * Retorna uma resposta 401 (UNAUTHORIZED).
 *
 * @param {Object} res Objeto de resposta do servidor
 * @param {Object} error Objeto de erro
 */
function unauthorized(res, error) {
  res.status(401)
  res.json({ error })
}

/**
 * Retorna uma resposta 403 (FORBIDDEN).
 *
 * @param {Object} res Objeto de resposta do servidor
 * @param {Object} error Objeto de erro
 */
function forbidden(res, error) {
  res.status(403)
  res.json({ error })
}

/**
 * Retorna uma resposta 404 (NOT FOUND).
 *
 * @param {Object} res Objeto de resposta do servidor
 * @param {String} error Mensagem de erro
 */
function notFound(res, error) {
  res.status(404)
  res.json({ error })
}

/**
 * Retorna uma resposta 500 (INTERNAL SERVER ERROR).
 *
 * @param {Object} res Objeto de resposta do servidor
 * @param {String} error Mensagem de erro
 */
function internalServerError(res, error = 'Erro interno do servidor') {
  res.status(500)
  res.json({ error })
}

module.exports = {
  ok,
  badRequest,
  unauthorized,
  forbidden,
  notFound,
  internalServerError
}
