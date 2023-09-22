function status(request, response) {
  response.status(200).json({ chave: "Sandro Junior" });
}

export default status;
