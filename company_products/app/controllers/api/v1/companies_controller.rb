class Api::V1::CompaniesController < ApplicationController
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token

  def index
    @companies = Company.order("name")
    render json: @companies
  end

  def update
    @company = Company.find params[:id]
    @company.likes += 1
    if @company.save
      head :ok
    else
      render json: { errors: @company.errors.full_messages }
    end
  end
end
