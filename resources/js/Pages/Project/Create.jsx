import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        image: "",
        name: "",
        status: "",
        description: "",
        due_date: "",
      })
    
    //   function handleChange(e) {
    //     const key = e.target.id;
    //     const value = e.target.value
    //     setValues(values => ({
    //         ...values,
    //         [key]: value,
    //     }))
    //   }
    
      function handleSubmit(e) {
        e.preventDefault()
        post(route('project.store'));
      };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between w-full px-6 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Create New Project</h2>
                </div>
            }
        
        >
            <Head title="Create Project" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                            <div>
                                <InputLabel
                                    htmlFor="project_image_path"
                                    value="Project Image"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                />

                                <TextInput
                                    id="project_image_path"
                                    type="file"
                                    name="image"
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('image', e.target.files[0])}
                                />

                                <InputError
                                    message={errors.image}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="project_name"
                                    value="Project Name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                />

                                <TextInput
                                    id="project_name"
                                    type="text"
                                    name="name"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="project_description"
                                    value="Project Description"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                />

                                <TextAreaInput
                                    id="project_decription"
                                    type="text"
                                    name="description"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                />

                                <InputError
                                    message={errors.description}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="project_due_date"
                                    value="Project Due Date"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                />

                                <TextInput
                                    id="projet_due_date"
                                    type="date"
                                    name="due_date"
                                    className="mt-1 block w-full"
                                    value={data.due_date}
                                    onChange={(e) => setData('due_date', e.target.value)}
                                />

                                <InputError
                                    message={errors.due_date}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="project_status"
                                    value="Project Due Date"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                />

                                <SelectInput
                                    id="projet_status"
                                    name="status"
                                    className="mt-1 block w-full"
                                    onChange={(e) => setData('status', e.target.value)}
                                >
                                    <option value="">Select Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="in_progress">In Progress</option>
                                    <option value="completed">Completed</option>
                                    
                                </SelectInput>

                                <InputError
                                    message={errors.status}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4 text-right">
                                <Link 
                                    href={route('project.index')}
                                    className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all duration-300 hover:bg-gray-00 mr-2"
                                >
                                    Cancel
                                </Link>
                                <button
                                    type="submit"
                                    className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}