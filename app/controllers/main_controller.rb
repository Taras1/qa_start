class MainController < ApplicationController

  def index
  end

  def feedback
    # if email is valid, must be flash message with good news
    # else flash message with bad news
    feedback_ = FeedBack.new feedback_params
    if feedback_.save
      flash[:message] = "Your feedback was send successfully"
    else
      flash[:error] = "The field for message must not be blank"
    end
    redirect_to action: :index
  end

  protected

  def feedback_params
    params.permit :name, :email, :message
  end

end
