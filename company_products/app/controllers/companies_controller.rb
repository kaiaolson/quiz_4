class CompaniesController < ApplicationController
  def index
    @companies = Company.order("name ASC")
    respond_to do |format|
      format.html { render }
      format.json { render json: @companies }
    end
  end

  def edit
    render nothing: true
  end

  def update
    @company = Company.find params[:id]
    @company.likes += 1
    if @company.save
      redirect_to companies_path, notice: "Liked!"
    else
      render companies_path, notice: "Unable to like!"
    end
  end
end
