class PagesController < ApplicationController
  include ReactOnRails::Controller

  before_action :html_only

  def root
    redux_store('dopeChessStore', props: {})
    render :app
  end

  def not_found
    redirect_to '/404'
  end

  private
    def html_only
      respond_to do |format|
        format.html { return }
        format.all { render text: '', status: 404 }
      end
    end
end
