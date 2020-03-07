class EventsController < ApplicationController

wrap_parameters :event, include: [:renter_id, :name, :location, :description, :start_date, :end_date]

    def new
        event = Event.new
        render json: event
    end

    def index
        event = Event.all
        render json: event
    end

    def show
        event = Event.find(params[:id])
        render json: event
    end

    def create
        event = Event.create(event_params)
        render json: event
    end

    private

    def event_params
      params.require(:event).permit(:renter_id, :name, :location, :description, :start_date, :end_date)
    end

end
