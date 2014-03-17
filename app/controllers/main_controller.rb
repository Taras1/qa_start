class MainController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => [:feedback]

  def index
    @posts = Post.all.order :number
  end

  def feedback
    # if email is valid, must be flash message with good news
    # else flash message with bad news
    feedback_ = FeedBack.new feedback_params
    if feedback_.save
      flash[:message] = "Your feedback was send successfully"
      render nothing: true, status: 200
    else
      flash[:error] = "The field for message must not be blank"
      render nothing: true, status: 400
    end
    #redirect_to action: :index, anchor:"content_Contacts"
  end

  protected

  def feedback_params
    params.permit :name, :email, :message
  end

end
