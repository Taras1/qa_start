class MainMailer < ActionMailer::Base
  default from: "app@qa-start.tk"

  def feedback(feedback_obj)
    @feedback_obj = feedback_obj
    mail(to: "info@qa-start.tk", subject: 'New feedback from qa-start')
  end
end
