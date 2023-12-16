class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    return response.json({ email, password });
  }
}

module.exports = SessionsController;

// Creating a session for the user, that is why the create method is being used.