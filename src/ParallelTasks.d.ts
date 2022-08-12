type TaskActor = Actor & {
	Execute: BindableEvent;
	Finished: BindableEvent;
};

type ParallelTasks = (actor: TaskActor) => {};

export = ParallelTasks;
