App = Ember.Application.create();

App.Router.map(function() {
  this.route("tasks", { path:"/tasks" });
  this.route("settings", { path:"/settings" });
});

// ROUTES

// Tasks Route
App.TasksRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('tasks');
	}
});

App.SettingsRoute = Ember.Route.extend({
	model: function() {
		return 0;
	}
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		return {
			name: "Test",
			className: "f-dropdown",
			choices: [
				{
					choice: "Tasks",
					logo: "icon icon-stack",
					templateName: 'tasks'
				},
				{
					choice: "Settings",
					logo: "icon icon-cog",
					templateName: 'settings'
				}
			]
		}
	}
});

// Application Route
App.ApplicationRoute = Ember.Route.extend({
	model: function() {
		return {
			choices: [
				{
					choice: "Home",
					logo: "icon icon-home",
					templateName: 'index'
				},
				{
					choice: "Tasks",
					logo: "icon icon-stack",
					templateName: 'tasks'
				},
				{
					choice: "Settings",
					logo: "icon icon-cog",
					templateName: 'settings'
				}
			]
		}
	}
});

// CONTROLLERS

App.TasksController = Ember.ArrayController.extend({
	daysLeft: function() {
		var diff = 0;
		return diff;
	}.property()
});

// OBJECTS
App.Choices = Ember.Object.extend({
	choices: [
		{
			choice: "Tasks",
			logo: "icon icon-stack"
		},
		{
			choice: "Settings",
			logo: "icon icon-cog"
		}
	]
});

// COMPONENTS
App.FocusSelectComponent = Ember.Component.extend({

	actions: {
		showChoices: function () {
			this.toggleProperty('isShowingChoices');
		}
	}
});

// FIXTURES



App.ApplicationAdapter = DS.FixtureAdapter;

App.Tasks = DS.Model.extend({
	group: DS.attr('string'),
	kind: DS.attr('string'),
	body: DS.attr('string'),
	dueDate: DS.attr('date'),
	isCompleted: DS.attr('boolean')
});

App.Tasks.reopenClass({
	FIXTURES: [
		{
			id:1,
			group: "something",
			kind: "hmwk",
			body: "something",
			dueDate: (new Date()),
			isCompleted: false
		},
		{
			id:2,
			group: "something",
			kind: "hmwk",
			body: "truebody",
			dueDate: (new Date()),
			isCompleted: true
		},
		{
			id:3,
			group: "something",
			kind: "hmwk",
			body: "something",
			dueDate: (new Date()),
			isCompleted: false
		},
		{
			id:4,
			group: "something",
			kind: "hmwk",
			body: "truebody",
			dueDate: (new Date()),
			isCompleted: true
		},
		{
			id:5,
			group: "something",
			kind: "hmwk",
			body: "something",
			dueDate: (new Date()),
			isCompleted: false
		},
		{
			id:6,
			group: "something",
			kind: "hmwk",
			body: "truebody",
			dueDate: (new Date()),
			isCompleted: true
		}
	]
});








