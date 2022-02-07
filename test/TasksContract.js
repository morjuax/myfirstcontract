 const TasksContract = artifacts.require('TasksContract');

contract('TasksContract', () => {
    before(async () => {
        this.tasksContract = await TasksContract.deployed()
    });

    it('migrate deployed successfully', () => {
        const address = this.tasksContract.address;

        assert.notEqual(address, null);
        assert.notEqual(address, undefined);
        assert.notEqual(address, 0x0);
        assert.notEqual(address, '');
    });

    it('get Tasks List', async () => {
        const taskCounter = await this.tasksContract.taskCounter();
        const task = await this.tasksContract.tasks(taskCounter);

        assert.equal(task.id.toNumber(), taskCounter);
    })
 })