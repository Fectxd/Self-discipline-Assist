enum ActionType {
  create,
  modify,
  modifyOnce,
  delete,
  deleteAll,
  toggleComplete,
}

class PendingAction {
  final String id;
  final ActionType type;
  final String description;
  final Map<String, dynamic> data;
  final DateTime timestamp;

  PendingAction({
    required this.id,
    required this.type,
    required this.description,
    required this.data,
    DateTime? timestamp,
  }) : timestamp = timestamp ?? DateTime.now();
}
