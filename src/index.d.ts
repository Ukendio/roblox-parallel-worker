declare class Dispatch {
	public Cancel(): boolean;
}

declare class ParallelWorker<T extends Callback = Callback> {
	public constructor(target: ModuleScript, allocate?: number);

	public Dispatch(...args: Parameters<T>): Dispatch;

	public Invoke(...args: Parameters<T>): LuaTuple<[boolean, ...ReturnType<T>]>;
}

export = ParallelWorker;
