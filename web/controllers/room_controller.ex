defmodule Exrtc.RoomController do
  use Exrtc.Web, :controller

  plug :put_layout, "room.html"

  def index(conn, _params) do
    render conn, "index.html"
  end
end
