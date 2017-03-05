defmodule Exrtc.PageController do
  use Exrtc.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
