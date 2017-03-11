defmodule Exrtc.PageController do
  use Exrtc.Web, :controller
  require Logger
  def index(conn, params) do
    case params do
      %{"room" => room} ->
        redirect conn, to: "/#{room}"
      _ ->   render conn, "index.html"  
    end
  end
end
