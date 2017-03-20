module.exports = function (knex) {
  return {
    getAllUsers: cb => {
      return knex('users')
        .select()
        .then(res => {
          cb(null, res)
        })
        .catch(err => {
          cb(err, null)
        })
    }
  }
}
